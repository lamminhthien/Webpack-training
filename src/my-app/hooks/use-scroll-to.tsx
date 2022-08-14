const useScrollTo = () => {
  return {
    top: toTop,
    bottom: toBottom
  };
};

function toTop() {
  window.scroll({ behavior: 'smooth', top: 0, left: 0 });
}

function toBottom() {
  window.scroll({
    behavior: 'smooth',
    top: document.documentElement.scrollHeight,
    left: 0
  });
}

export default useScrollTo;
