export function createSlideOverview(sessions) {
  return sessions.flatMap((session) =>
    session.slides.map((slide, slideIndex) => ({
      sessionNumber: session.number,
      sessionTitle: session.title,
      slideIndex,
      slideNumber: slideIndex + 1,
      slideTitle: slide.title,
      slideKind: slide.kind
    }))
  );
}
