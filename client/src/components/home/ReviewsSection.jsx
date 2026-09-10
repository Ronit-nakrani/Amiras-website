import React, { useState } from 'react';
import { Star, Plus, CheckCircle2, X } from 'lucide-react';
import { api } from '../../services/api';

/**
 * ReviewsSection Component
 * Displays authentic verified Google customer testimonials, average rating (4.4★),
 * and provides an interactive modal for patrons to submit new reviews.
 */
export default function ReviewsSection({ reviews = [], onAddReview }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [dishRecommended, setDishRecommended] = useState('Paneer Tikka Masala');
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    setSubmitting(true);
    try {
      const res = await api.submitReview({
        name: name.trim(),
        rating,
        comment: comment.trim(),
        dishRecommended: dishRecommended.trim(),
      });
      if (res.data && onAddReview) {
        onAddReview(res.data);
      }
      setSuccessMsg(true);
      setTimeout(() => {
        setSuccessMsg(false);
        setModalOpen(false);
        setName('');
        setComment('');
      }, 1800);
    } catch (err) {
      console.error('Failed to submit review:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="reviews" className="py-20 bg-[#14100d] border-t border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>4.4 Stars on Google (2,400+ Reviews)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Loved by Surat Food Lovers
            </h2>
            <p className="text-stone-400 text-sm mt-1">
              Read authentic feedback from families and diners visiting Hotel Amiras in Nana Varachha.
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all transform active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev._id || rev.name}
              className="glass-panel p-5 rounded-2xl flex flex-col justify-between hover:border-amber-500/30 transition duration-300"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-stone-700'
                      }`}
                    />
                  ))}
                </div>

                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-800">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white text-xs">{rev.name}</span>
                  <span className="text-[10px] text-stone-500">{rev.date}</span>
                </div>
                {rev.dishRecommended && (
                  <div className="text-[11px] text-amber-400/90 font-medium mt-1 truncate">
                    Recommended: {rev.dishRecommended}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
          
          <div className="relative bg-[#181410] border border-stone-800 rounded-3xl w-full max-w-md p-6 z-10 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <h3 className="text-lg font-serif font-bold text-white">Share Your Dining Experience</h3>
              <button onClick={() => setModalOpen(false)} className="text-stone-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {successMsg ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h4 className="text-base font-bold text-white">Thank you for reviewing Hotel Amiras!</h4>
                <p className="text-stone-400 text-xs">Your review has been posted.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">Your Rating *</label>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1 hover:scale-125 transition-transform"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= rating ? 'fill-amber-400 text-amber-400' : 'text-stone-600'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-amber-400 ml-2">{rating} out of 5</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Chirag Patel"
                    className="w-full px-3.5 py-2 rounded-xl bg-stone-900 border border-stone-700 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">Favorite Dish Ordered</label>
                  <input
                    type="text"
                    value={dishRecommended}
                    onChange={(e) => setDishRecommended(e.target.value)}
                    placeholder="e.g. Paneer Tikka Masala, Butter Naan"
                    className="w-full px-3.5 py-2 rounded-xl bg-stone-900 border border-stone-700 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">Review Comments *</label>
                  <textarea
                    rows={3}
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Tell us what you enjoyed about our food, service, or ambiance..."
                    className="w-full px-3.5 py-2 rounded-xl bg-stone-900 border border-stone-700 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition"
                >
                  {submitting ? 'Submitting...' : 'Post Review'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

