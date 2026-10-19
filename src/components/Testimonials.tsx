import React from "react";
import Image from "next/image";
import { Star, ExternalLink, CheckCircle2 } from "lucide-react";
import { getPlaceReviews, GoogleReview } from "@/lib/google-reviews";

interface TestimonialsProps {
  placeId?: string;
}

export async function Testimonials({
  placeId = "ChIJNz8xenJcXz4RwzRlDLet-xI",
}: TestimonialsProps) {
  const { rating, userRatingCount, reviews } = await getPlaceReviews(placeId);

  const googleMapsUrl = `https://search.google.com/local/reviews?placeid=${placeId}`;

  return (
    <section
      className="pt-6 sm:pt-8 lg:pt-12 pb-12 lg:pb-20 overflow-hidden relative"
      id="testimonials"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-red-50 text-[#E31E24] text-xs sm:text-[13px] font-bold tracking-wide mb-3 sm:mb-4">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Verified Google Reviews
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-[2.5rem] font-black uppercase mb-2.5 sm:mb-3 text-[#1f2937] tracking-tight leading-snug sm:leading-tight">
            WHAT <span className="text-[#E31E24]">PARENTS & STUDENTS</span> SAY
          </h2>

          <p className="text-gray-500 text-sm sm:text-[17px] font-medium max-w-2xl px-2">
            Real stories, real progress, and authentic feedback from our community.
          </p>

          {/* Overall Rating & Google Attribution Summary Card */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 bg-white border border-gray-100 rounded-2xl px-6 py-4 shadow-sm">
            <div className="flex items-center gap-3">
              <Image
                src="/images/google.png"
                alt="Google"
                width={36}
                height={36}
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
              />
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-black text-gray-900 leading-none">
                    {rating ? rating.toFixed(1) : "5.0"}
                  </span>
                  <div className="flex items-center text-amber-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= Math.round(rating || 5)
                            ? "fill-current text-amber-400"
                            : "text-gray-200 fill-current"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">
                  Based on{" "}
                  <span className="font-semibold text-gray-700">
                    {userRatingCount ? `${userRatingCount} reviews` : "260+ reviews"}
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden sm:block h-8 w-px bg-gray-200" />

            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Reviews from Google
              </span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#E31E24] hover:underline"
              >
                View on Maps
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        {reviews && reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review: GoogleReview, idx: number) => {
              const author = review.authorAttribution;
              const reviewText =
                review.text?.text || review.originalText?.text || "";

              return (
                <article
                  key={review.name || idx}
                  className="bg-white rounded-[1.25rem] p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
                >
                  <div>
                    {/* Rating & Relative Time */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-[16px] h-[16px] ${
                              star <= (review.rating || 5)
                                ? "fill-current text-amber-400"
                                : "text-gray-200 fill-current"
                            }`}
                          />
                        ))}
                      </div>
                      {review.relativePublishTimeDescription && (
                        <span className="text-xs text-gray-400 font-medium">
                          {review.relativePublishTimeDescription}
                        </span>
                      )}
                    </div>

                    {/* Review Body */}
                    <p className="text-[#1f2937] text-[15px] font-normal leading-[1.65] line-clamp-6">
                      &ldquo;{reviewText}&rdquo;
                    </p>
                  </div>

                  {/* Author Attribution Footer */}
                  <div className="flex items-center gap-3.5 mt-6 pt-4 border-t border-gray-100">
                    <div className="relative w-11 h-11 flex-shrink-0">
                      {author?.photoUri ? (
                        <Image
                          src={author.photoUri}
                          alt={author.displayName || "Google Reviewer"}
                          width={44}
                          height={44}
                          referrerPolicy="no-referrer"
                          className="rounded-full w-11 h-11 object-cover border border-gray-100"
                        />
                      ) : (
                        <div className="w-11 h-11 rounded-full bg-red-100 text-[#E31E24] font-bold flex items-center justify-center text-sm">
                          {(author?.displayName || "G").charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      {author?.uri ? (
                        <a
                          href={author.uri}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-gray-900 text-[15px] leading-tight block truncate hover:text-[#E31E24] transition-colors"
                          title={author.displayName}
                        >
                          {author.displayName}
                        </a>
                      ) : (
                        <span className="font-bold text-gray-900 text-[15px] leading-tight block truncate">
                          {author?.displayName || "Google Reviewer"}
                        </span>
                      )}
                      <div className="flex items-center gap-1.5 text-gray-500 text-[12px] mt-0.5">
                        <Image
                          src="/images/google.png"
                          alt="Google"
                          width={14}
                          height={14}
                          className="w-3.5 h-3.5 object-contain"
                        />
                        <span>Google Review</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
            <p className="text-gray-500">No reviews found at this time.</p>
          </div>
        )}

        {/* Bottom CTA to view all reviews on Google */}
        <div className="mt-10 flex justify-center">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-800 font-bold text-[14px] hover:border-[#E31E24] hover:text-[#E31E24] shadow-sm hover:shadow transition-all"
          >
            <Image
              src="/images/google.png"
              alt="Google"
              width={20}
              height={20}
              className="w-5 h-5 object-contain"
            />
            <span>Read All Google Reviews</span>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#E31E24]" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
