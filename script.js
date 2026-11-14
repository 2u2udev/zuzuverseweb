if (/^tr(?:-|$)/i.test(navigator.language)) {
  document.documentElement.lang = "tr";
  document.title = "Zuzu | Yazılım ve Oyun Geliştiricisi";
  document.querySelector('meta[name="description"]').content =
    "Yusuf Zuzu’nun yazılım, oyun ve web projeleri.";
  document.querySelectorAll("[data-tr]").forEach((element) => {
    element.textContent = element.dataset.tr;
  });
  document.querySelectorAll("[data-tr-label]").forEach((element) => {
    element.setAttribute("aria-label", element.dataset.trLabel);
  });
}
