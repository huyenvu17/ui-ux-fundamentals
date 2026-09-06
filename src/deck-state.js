export function createDeckState(sessions) {
  if (!Array.isArray(sessions) || sessions.length === 0) {
    throw new Error("createDeckState requires at least one session");
  }

  return {
    sessions,
    currentSessionIndex: 0,
    currentSlideIndex: 0,

    currentSession() {
      return this.sessions[this.currentSessionIndex];
    },

    currentSlide() {
      return this.currentSession().slides[this.currentSlideIndex];
    },

    goToSession(sessionNumber) {
      const index = this.sessions.findIndex((session) => session.number === sessionNumber);
      if (index === -1) return false;
      this.currentSessionIndex = index;
      this.currentSlideIndex = 0;
      return true;
    },

    goToSlide(slideIndex) {
      const max = this.currentSession().slides.length - 1;
      this.currentSlideIndex = Math.min(Math.max(slideIndex, 0), max);
    },

    next() {
      const session = this.currentSession();
      if (this.currentSlideIndex < session.slides.length - 1) {
        this.currentSlideIndex += 1;
        return;
      }

      if (this.currentSessionIndex < this.sessions.length - 1) {
        this.currentSessionIndex += 1;
        this.currentSlideIndex = 0;
      }
    },

    previous() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex -= 1;
        return;
      }

      if (this.currentSessionIndex > 0) {
        this.currentSessionIndex -= 1;
        this.currentSlideIndex = this.currentSession().slides.length - 1;
      }
    }
  };
}
