export const isMobile = () => {
  let userAgent = navigator.userAgent;
  return Boolean(userAgent?.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  ))
}