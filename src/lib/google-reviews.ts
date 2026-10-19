export interface GoogleReviewAuthorAttribution {
  displayName: string;
  uri: string;
  photoUri: string;
}

export interface GoogleReviewText {
  text: string;
  languageCode?: string;
}

export interface GoogleReview {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text?: GoogleReviewText;
  originalText?: GoogleReviewText;
  authorAttribution: GoogleReviewAuthorAttribution;
  publishTime?: string;
  googleMapsUri?: string;
}

export interface PlaceReviewsResult {
  rating: number;
  userRatingCount: number;
  reviews: GoogleReview[];
  displayName?: string;
}

export async function getPlaceReviews(placeId: string): Promise<PlaceReviewsResult> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    console.error('Google Reviews Error: GOOGLE_PLACES_API_KEY is not defined in environment variables.');
    return { rating: 0, userRatingCount: 0, reviews: [] };
  }

  const url = `https://places.googleapis.com/v1/places/${placeId}`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'displayName,rating,userRatingCount,reviews',
      },
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error(
        `Google Reviews API returned HTTP ${res.status}: ${err?.error?.message || 'Failed to fetch reviews'}`
      );
      return { rating: 0, userRatingCount: 0, reviews: [] };
    }

    const data = await res.json();

    return {
      rating: data.rating ?? 0,
      userRatingCount: data.userRatingCount ?? 0,
      reviews: data.reviews ?? [],
      displayName: data.displayName?.text,
    };
  } catch (error) {
    console.error('Failed to fetch Google Place reviews:', error instanceof Error ? error.message : error);
    return { rating: 0, userRatingCount: 0, reviews: [] };
  }
}
