
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('load[src]').forEach(async (el) => {
      const url = el.getAttribute('src');
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(res.statusText);
        const text = await res.text();
        // заменяем <load>…</load> на сам загруженный HTML
        const wrapper = document.createElement('div');
        wrapper.innerHTML = text;
        el.replaceWith(...wrapper.childNodes);
      } catch (e) {
        console.error(`Ошибка загрузки ${url}:`, e);
      }
    });
  });
  