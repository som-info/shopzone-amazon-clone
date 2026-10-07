/* ShopZone landing page — vanilla JS, no dependencies */
(function () {
  'use strict';

  /* ---------------------------------------------------------
     Data
     --------------------------------------------------------- */
  var CATEGORY_NAMES = {
    all: 'All Departments',
    electronics: 'Electronics',
    fashion: 'Fashion',
    home: 'Home & Kitchen',
    gaming: 'Gaming',
    books: 'Books',
    sports: 'Sports & Outdoors'
  };

  var PRODUCTS = [
    // Today's deals
    { id: 'p01', row: 'deals', title: 'AuraSound Pro Wireless Over-Ear Headphones with Noise Cancelling', cats: ['electronics', 'gaming'], price: 89.99, list: 149.99, rating: 4.6, reviews: 12873, img: 'p-headphones.jpg', alt: 'Black over-ear wireless headphones on a yellow background', plus: true, tags: 'audio bluetooth' },
    { id: 'p02', row: 'deals', title: 'Pulse Fit Smartwatch, Heart Rate & Sleep Tracking, 7-Day Battery', cats: ['electronics', 'sports'], price: 129.0, list: 179.0, rating: 4.4, reviews: 5310, img: 'p-watch.jpg', alt: 'White smartwatch with a round face', plus: true, tags: 'watch wearable fitness' },
    { id: 'p03', row: 'deals', title: 'HomeVoice Smart Speaker with Room-Filling Sound', cats: ['electronics', 'home'], price: 49.99, list: 99.99, rating: 4.7, reviews: 40211, img: 'p-speaker.jpg', alt: 'Grey fabric smart speaker next to a plant', plus: true, tags: 'audio smart home assistant' },
    { id: 'p04', row: 'deals', title: 'SlimBook 14" Laptop, 16GB RAM, 512GB SSD, All-Day Battery', cats: ['electronics'], price: 649.0, list: 849.0, rating: 4.5, reviews: 2187, img: 'p-laptop.jpg', alt: 'Laptop on a wooden desk', plus: true, tags: 'computer notebook pc' },
    { id: 'p05', row: 'deals', title: 'SnapMini Kids Digital Camera, 1080p Photo & Video, Rechargeable', cats: ['electronics'], price: 39.95, list: 59.95, rating: 4.3, reviews: 8742, img: 'p-camera.jpg', alt: 'Pastel pink compact kids camera with a beaded heart strap', plus: false, tags: 'camera photo photography instant kids' },
    { id: 'p06', row: 'deals', title: 'TabOne 11" Tablet, 128GB, Full HD Display, Stylus Support', cats: ['electronics'], price: 199.99, list: 279.99, rating: 4.6, reviews: 15432, img: 'p-tablet.jpg', alt: 'Tablet with a colorful wallpaper on a dark desk', plus: true, tags: 'ipad screen reader' },
    { id: 'p07', row: 'deals', title: 'KeyFlow Slim Wireless Keyboard, Rechargeable, Quiet Keys', cats: ['electronics', 'gaming'], price: 39.99, list: 59.99, rating: 4.5, reviews: 6620, img: 'p-keyboard.jpg', alt: 'Slim white wireless keyboard', plus: true, tags: 'computer accessories typing' },
    { id: 'p08', row: 'deals', title: 'Nordic Pendant Light, Matte White Metal Shade', cats: ['home'], price: 34.99, list: 52.99, rating: 4.4, reviews: 1904, img: 'p-lamp.jpg', alt: 'White pendant lamp in front of a teal wall', plus: false, tags: 'lamp lighting decor' },
    { id: 'p09', row: 'deals', title: 'Classic Polarized Sunglasses with UV400 Protection', cats: ['fashion', 'sports'], price: 19.99, list: 34.99, rating: 4.2, reviews: 22015, img: 'p-sunglasses.jpg', alt: 'Black polarized sunglasses', plus: true, tags: 'glasses accessories summer' },
    // Best sellers
    { id: 'p10', row: 'best', title: 'Velocity Runner Knit Running Shoes, Lightweight & Breathable', cats: ['fashion', 'sports'], price: 74.99, list: 0, rating: 4.7, reviews: 31877, img: 'p-sneakers.jpg', alt: 'Pair of dark knit running shoes under pink and blue lighting', plus: true, tags: 'sneakers shoes running' },
    { id: 'p11', row: 'best', title: 'Nova X Smartphone, 6.1" OLED, 128GB, Dual Camera', cats: ['electronics'], price: 399.0, list: 0, rating: 4.5, reviews: 9876, img: 'p-phone.jpg', alt: 'Smartphone with app icons on a desk', plus: true, tags: 'phone mobile cell' },
    { id: 'p12', row: 'best', title: 'Urban Commuter Backpack, Water-Resistant, 15.6" Laptop Sleeve', cats: ['fashion', 'sports'], price: 42.5, list: 0, rating: 4.8, reviews: 18452, img: 'p-backpack.jpg', alt: 'Navy blue backpack', plus: true, tags: 'bag school travel' },
    { id: 'p13', row: 'best', title: 'ProPlay Wireless Game Controller for PC & Console', cats: ['gaming', 'electronics'], price: 54.99, list: 0, rating: 4.6, reviews: 27341, img: 'p-controller.jpg', alt: 'White wireless game controller on a console', plus: true, tags: 'gamepad console video games' },
    { id: 'p14', row: 'best', title: 'The Startup Playbook — Bestselling Business Book Bundle', cats: ['books'], price: 24.99, list: 0, rating: 4.7, reviews: 4109, img: 'p-book.jpg', alt: 'Stack of business books', plus: false, tags: 'reading paperback business' },
    { id: 'p15', row: 'best', title: 'HydroSteel Insulated Water Bottle, 24 oz, Keeps Cold 24h', cats: ['sports', 'home'], price: 21.99, list: 0, rating: 4.8, reviews: 52388, img: 'p-bottle.jpg', alt: 'Matte green insulated water bottle', plus: true, tags: 'bottle outdoor gym hiking' },
    { id: 'p16', row: 'best', title: 'Everyday Ceramic Coffee Mug Set of 4, 12 oz', cats: ['home'], price: 18.99, list: 0, rating: 4.6, reviews: 11520, img: 'p-mug.jpg', alt: 'White ceramic coffee mug', plus: true, tags: 'kitchen coffee tea cup dining' },
    { id: 'p17', row: 'best', title: 'Mini Succulent in Ceramic Pot — Low-Maintenance Desk Plant', cats: ['home'], price: 15.99, list: 0, rating: 4.4, reviews: 3290, img: 'p-plant.jpg', alt: 'Succulent plant in a mint ceramic pot', plus: false, tags: 'plant decor garden' },
    { id: 'p18', row: 'best', title: 'Heritage Low-Top Leather Sneakers, Unisex', cats: ['fashion'], price: 64.0, list: 0, rating: 4.5, reviews: 7765, img: 'p-shoes.jpg', alt: 'Tan leather low-top sneaker on a mustard fabric', plus: true, tags: 'shoes sneakers leather' }
  ];

  var byId = {};
  PRODUCTS.forEach(function (p) { byId[p.id] = p; });

  /* ---------------------------------------------------------
     Helpers
     --------------------------------------------------------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function money(n) { return '$' + n.toFixed(2); }
  function fmtCount(n) { return n.toLocaleString('en-US'); }

  var store = {
    get: function (key, fallback) {
      try { var v = window.localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
      catch (e) { return fallback; }
    },
    set: function (key, value) {
      try { window.localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage unavailable */ }
    }
  };

  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------
     Toast
     --------------------------------------------------------- */
  var toastEl = $('#toast');
  var toastTimer;
  function toast(message) {
    toastEl.innerHTML = '<span class="toast-check" aria-hidden="true">✓</span><span>' + esc(message) + '</span>';
    toastEl.hidden = false;
    // force reflow so the transition runs
    void toastEl.offsetWidth;
    toastEl.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove('is-visible');
      setTimeout(function () { toastEl.hidden = true; }, 300);
    }, 2400);
  }

  /* ---------------------------------------------------------
     Product rendering
     --------------------------------------------------------- */
  function starsHtml(rating, reviews) {
    var pct = Math.round((rating / 5) * 100);
    return '<div class="rating">' +
      '<span class="stars" style="--pct:' + pct + '%" role="img" aria-label="' + rating.toFixed(1) + ' out of 5 stars">★★★★★</span>' +
      '<a href="#products" class="rating-count" aria-label="' + fmtCount(reviews) + ' ratings">' + fmtCount(reviews) + '</a>' +
      '</div>';
  }

  function priceHtml(price) {
    var whole = Math.floor(price);
    var cents = Math.round((price - whole) * 100);
    return '<span class="price" aria-label="Price ' + money(price) + '"><sup aria-hidden="true">$</sup>' +
      '<span aria-hidden="true">' + whole + '</span><sup class="cents" aria-hidden="true">' + (cents < 10 ? '0' : '') + cents + '</sup></span>';
  }

  function productCard(p, index) {
    var off = p.list ? Math.round((1 - p.price / p.list) * 100) : 0;
    var html = '<li class="product-card" data-id="' + p.id + '">';
    html += '<a href="#products" class="product-media" tabindex="-1" aria-hidden="true">';
    if (p.row === 'best' && index < 3) html += '<span class="badge-best">#' + (index + 1) + ' Best Seller</span>';
    html += '<img src="assets/img/' + p.img + '" alt="' + esc(p.alt) + '" width="360" height="360" loading="lazy"></a>';
    if (off > 0) {
      html += '<div class="deal-line"><span class="deal-badge">' + off + '% off</span><span class="deal-text">Limited time deal</span></div>';
    }
    html += '<a href="#products" class="product-title">' + esc(p.title) + '</a>';
    html += starsHtml(p.rating, p.reviews);
    html += '<div class="price-line">' + priceHtml(p.price);
    if (p.list) html += '<span class="list-price">List: <s>' + money(p.list) + '</s></span>';
    html += '</div>';
    html += '<div class="delivery">';
    if (p.plus) html += '<span class="zoneplus-badge" aria-label="ZonePlus eligible">✓ZonePlus</span><span>FREE delivery <strong>Tomorrow</strong></span>';
    else html += '<span>FREE delivery <strong>Fri, Oct 9</strong> on $35 of items</span>';
    html += '</div>';
    html += '<button class="btn btn-yellow add-to-cart" data-add="' + p.id + '" aria-label="Add ' + esc(p.title) + ' to cart">Add to cart</button>';
    html += '</li>';
    return html;
  }

  var dealsRow = $('#dealsRow');
  var bestRow = $('#bestRow');
  dealsRow.innerHTML = PRODUCTS.filter(function (p) { return p.row === 'deals'; }).map(productCard).join('');
  bestRow.innerHTML = PRODUCTS.filter(function (p) { return p.row === 'best'; }).map(productCard).join('');

  /* ---------------------------------------------------------
     Cart (localStorage)
     --------------------------------------------------------- */
  var CART_KEY = 'shopzone-cart-v1';
  var cart = store.get(CART_KEY, {});
  // drop unknown ids (e.g. after catalogue changes)
  Object.keys(cart).forEach(function (id) { if (!byId[id] || !(cart[id] > 0)) delete cart[id]; });

  var cartCountEl = $('#cartCount');
  var cartBtn = $('#cartBtn');
  var cartItemsEl = $('#cartItems');
  var cartEmptyEl = $('#cartEmpty');

  function cartTotals() {
    var count = 0, total = 0;
    Object.keys(cart).forEach(function (id) { count += cart[id]; total += cart[id] * byId[id].price; });
    return { count: count, total: total };
  }

  function renderCart(bump) {
    var t = cartTotals();
    cartCountEl.textContent = t.count > 99 ? '99+' : String(t.count);
    cartBtn.setAttribute('aria-label', 'Cart, ' + t.count + (t.count === 1 ? ' item' : ' items'));
    if (bump) {
      cartCountEl.classList.remove('bump');
      void cartCountEl.offsetWidth;
      cartCountEl.classList.add('bump');
    }
    var ids = Object.keys(cart);
    cartItemsEl.innerHTML = ids.map(function (id) {
      var p = byId[id];
      return '<li class="cart-item" data-id="' + id + '">' +
        '<img src="assets/img/' + p.img + '" alt="" width="64" height="64">' +
        '<div><div class="cart-item-title">' + esc(p.title) + '</div>' +
        '<div class="cart-item-price">' + money(p.price) + '</div>' +
        '<div class="qty" role="group" aria-label="Quantity">' +
        '<button data-qty="-1" aria-label="Decrease quantity">−</button><span>' + cart[id] + '</span>' +
        '<button data-qty="1" aria-label="Increase quantity">+</button></div></div>' +
        '<button class="cart-remove" data-remove="' + id + '">Delete</button></li>';
    }).join('');
    cartEmptyEl.hidden = ids.length > 0;
    $('#cartSubtotalCount').textContent = t.count;
    $('#cartSubtotal').textContent = money(t.total);
    $('#checkoutBtn').disabled = ids.length === 0;
  }

  function saveCart(bump) { store.set(CART_KEY, cart); renderCart(bump); }

  function addToCart(id, button) {
    cart[id] = (cart[id] || 0) + 1;
    saveCart(true);
    toast('Added to cart: ' + byId[id].title);
    if (button) {
      button.textContent = 'Added ✓';
      button.classList.add('is-added');
      clearTimeout(button._t);
      button._t = setTimeout(function () {
        button.textContent = 'Add to cart';
        button.classList.remove('is-added');
      }, 1500);
    }
  }

  document.addEventListener('click', function (e) {
    var add = e.target.closest('[data-add]');
    if (add) { addToCart(add.getAttribute('data-add'), add); }
  });

  cartItemsEl.addEventListener('click', function (e) {
    var item = e.target.closest('.cart-item');
    if (!item) return;
    var id = item.getAttribute('data-id');
    var qtyBtn = e.target.closest('[data-qty]');
    if (qtyBtn) {
      cart[id] += Number(qtyBtn.getAttribute('data-qty'));
      if (cart[id] <= 0) delete cart[id];
      saveCart(true);
    } else if (e.target.closest('[data-remove]')) {
      delete cart[id];
      saveCart(true);
    }
  });

  $('#cartClear').addEventListener('click', function () { cart = {}; saveCart(true); });
  $('#checkoutBtn').addEventListener('click', function () { toast('Checkout is disabled in this demo.'); });

  // keep tabs in sync
  window.addEventListener('storage', function (e) {
    if (e.key === CART_KEY) { cart = store.get(CART_KEY, {}); renderCart(false); }
  });

  renderCart(false);

  /* ---------------------------------------------------------
     Drawers: side menu + cart panel
     --------------------------------------------------------- */
  var overlay = $('#overlay');
  var sideMenu = $('#sideMenu');
  var cartPanel = $('#cartPanel');
  var openPanel = null;
  var lastFocus = null;
  var menuTriggers = [$('#menuToggle'), $('#allMenuBtn')];

  function openDrawer(panel, trigger) {
    if (openPanel) closeDrawer(true);
    lastFocus = trigger || document.activeElement;
    openPanel = panel;
    overlay.hidden = false;
    void overlay.offsetWidth;
    overlay.classList.add('is-visible');
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    (panel === sideMenu ? menuTriggers : [cartBtn]).forEach(function (b) { b.setAttribute('aria-expanded', 'true'); });
    var focusTarget = panel.querySelector('.icon-btn');
    if (focusTarget) setTimeout(function () { focusTarget.focus(); }, 50);
  }

  function closeDrawer(silent) {
    if (!openPanel) return;
    var panel = openPanel;
    openPanel = null;
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    (panel === sideMenu ? menuTriggers : [cartBtn]).forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
    overlay.classList.remove('is-visible');
    document.body.classList.remove('no-scroll');
    setTimeout(function () { if (!openPanel) overlay.hidden = true; }, 250);
    if (!silent && lastFocus && lastFocus.focus) lastFocus.focus();
  }

  menuTriggers.forEach(function (btn) {
    btn.addEventListener('click', function () { openDrawer(sideMenu, btn); });
  });
  $('#menuClose').addEventListener('click', function () { closeDrawer(); });
  cartBtn.addEventListener('click', function () { openDrawer(cartPanel, cartBtn); });
  $('#cartClose').addEventListener('click', function () { closeDrawer(); });
  overlay.addEventListener('click', function () { closeDrawer(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && openPanel) closeDrawer();
  });
  // close the side menu when one of its links is used
  sideMenu.addEventListener('click', function (e) {
    if (e.target.closest('a')) closeDrawer(true);
  });

  /* ---------------------------------------------------------
     Search + category filter
     --------------------------------------------------------- */
  var searchForm = $('#searchForm');
  var searchInput = $('#searchInput');
  var searchCategory = $('#searchCategory');
  var searchCategoryLabel = $('#searchCategoryLabel');
  var filterBar = $('#filterBar');
  var filterStatus = $('#filterStatus');

  function updateCategoryLabel() {
    var v = searchCategory.value;
    searchCategoryLabel.textContent = v === 'all' ? 'All' : CATEGORY_NAMES[v];
  }

  function matches(p, query, category) {
    if (category !== 'all' && p.cats.indexOf(category) === -1) return false;
    if (!query) return true;
    var haystack = (p.title + ' ' + p.tags + ' ' + p.cats.map(function (c) { return CATEGORY_NAMES[c]; }).join(' ')).toLowerCase();
    return query.split(/\s+/).every(function (word) { return haystack.indexOf(word) !== -1; });
  }

  function applyFilter() {
    var query = searchInput.value.trim().toLowerCase();
    var category = searchCategory.value;
    var total = 0;

    $all('.row-section').forEach(function (section) {
      var visible = 0;
      $all('.product-card', section).forEach(function (card) {
        var show = matches(byId[card.getAttribute('data-id')], query, category);
        card.hidden = !show;
        if (show) visible++;
      });
      total += visible;
      $('.row-empty', section).hidden = visible > 0;
      $('.row-wrap', section).hidden = visible === 0;
      var row = $('.product-row', section);
      row.scrollLeft = 0;
      updateRowArrows(row);
    });

    var active = query || category !== 'all';
    filterBar.hidden = !active;
    if (active) {
      var msg = total + (total === 1 ? ' result' : ' results');
      if (query) msg += ' for "' + searchInput.value.trim() + '"';
      if (category !== 'all') msg += ' in ' + CATEGORY_NAMES[category];
      filterStatus.textContent = msg;
    }
  }

  var debounceTimer;
  searchInput.addEventListener('input', function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(applyFilter, 150);
  });
  searchCategory.addEventListener('change', function () { updateCategoryLabel(); applyFilter(); });
  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    applyFilter();
    $('#products').scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
  });

  function resetFilter() {
    searchInput.value = '';
    searchCategory.value = 'all';
    updateCategoryLabel();
    applyFilter();
  }
  $('#filterReset').addEventListener('click', resetFilter);

  // Category links anywhere on the page (nav bar, cards, side menu, hero)
  document.addEventListener('click', function (e) {
    var link = e.target.closest('[data-filter]');
    if (!link) return;
    var cat = link.getAttribute('data-filter');
    if (!CATEGORY_NAMES[cat]) return;
    searchInput.value = '';
    searchCategory.value = cat;
    updateCategoryLabel();
    applyFilter();
  });

  updateCategoryLabel();

  /* ---------------------------------------------------------
     Horizontal product row arrows
     --------------------------------------------------------- */
  function updateRowArrows(row) {
    var wrap = row.parentElement;
    var max = row.scrollWidth - row.clientWidth - 2;
    $('.row-prev', wrap).disabled = row.scrollLeft <= 2;
    $('.row-next', wrap).disabled = row.scrollLeft >= max;
  }
  $all('.product-row').forEach(function (row) {
    row.addEventListener('scroll', function () { updateRowArrows(row); }, { passive: true });
    updateRowArrows(row);
  });
  $all('.row-arrow').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var row = btn.parentElement.querySelector('.product-row');
      row.scrollBy({ left: Number(btn.getAttribute('data-dir')) * row.clientWidth * 0.85, behavior: 'smooth' });
    });
  });
  window.addEventListener('resize', function () { $all('.product-row').forEach(updateRowArrows); });

  /* ---------------------------------------------------------
     Hero carousel
     --------------------------------------------------------- */
  var hero = $('.hero');
  var slides = $all('.hero-slide');
  var dotsWrap = $('#heroDots');
  var current = 0;
  var timer = null;
  var DELAY = 5000;

  slides.forEach(function (slide, i) {
    var dot = document.createElement('button');
    dot.className = 'hero-dot';
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', 'Show slide ' + (i + 1) + ' of ' + slides.length);
    dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    dot.addEventListener('click', function () { goTo(i); restart(); });
    dotsWrap.appendChild(dot);
  });
  var dots = $all('.hero-dot', dotsWrap);

  function goTo(i) {
    current = (i + slides.length) % slides.length;
    slides.forEach(function (s, idx) {
      var on = idx === current;
      s.classList.toggle('is-active', on);
      s.setAttribute('aria-hidden', on ? 'false' : 'true');
      $all('a, button', s).forEach(function (el) { el.tabIndex = on ? 0 : -1; });
      if (on) { var img = $('img', s); if (img) img.loading = 'eager'; }
    });
    dots.forEach(function (d, idx) { d.setAttribute('aria-selected', idx === current ? 'true' : 'false'); });
  }
  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }
  function start() { if (!timer && !prefersReducedMotion) timer = setInterval(next, DELAY); }
  function stop() { clearInterval(timer); timer = null; }
  function restart() { stop(); start(); }

  $('#heroNext').addEventListener('click', function () { next(); restart(); });
  $('#heroPrev').addEventListener('click', function () { prev(); restart(); });
  hero.addEventListener('mouseenter', stop);
  hero.addEventListener('mouseleave', start);
  hero.addEventListener('focusin', stop);
  hero.addEventListener('focusout', start);
  hero.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { next(); restart(); }
    if (e.key === 'ArrowLeft') { prev(); restart(); }
  });
  document.addEventListener('visibilitychange', function () { if (document.hidden) stop(); else start(); });

  // touch swipe
  var touchX = null;
  hero.addEventListener('touchstart', function (e) { touchX = e.touches[0].clientX; stop(); }, { passive: true });
  hero.addEventListener('touchend', function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) { if (dx < 0) next(); else prev(); }
    touchX = null;
    start();
  });

  goTo(0);
  start();

  /* ---------------------------------------------------------
     Delivery location dialog
     --------------------------------------------------------- */
  var LOC_KEY = 'shopzone-zip';
  var dialog = $('#locationDialog');
  var zipInput = $('#zipInput');
  var zipError = $('#zipError');

  function setLocation(text) {
    $('#locationLabel').textContent = text;
    $('#locationLabelMobile').textContent = text;
  }
  var savedZip = store.get(LOC_KEY, null);
  if (savedZip) setLocation('ZIP ' + savedZip);

  function openLocation() {
    if (typeof dialog.showModal !== 'function') { toast('Location picker is not supported in this browser.'); return; }
    zipError.hidden = true;
    zipInput.value = savedZip || '';
    dialog.showModal();
  }
  $('#locationBtn').addEventListener('click', openLocation);
  $('#locationBtnMobile').addEventListener('click', openLocation);

  $('#locationForm').addEventListener('submit', function (e) {
    var submitter = e.submitter;
    if (submitter && submitter.value === 'cancel') return;
    var zip = zipInput.value.trim();
    if (!/^\d{5}$/.test(zip)) { e.preventDefault(); zipError.hidden = false; zipInput.focus(); return; }
    savedZip = zip;
    store.set(LOC_KEY, zip);
    setLocation('ZIP ' + zip);
    toast('Delivery location updated to ' + zip);
  });

  /* ---------------------------------------------------------
     Back to top
     --------------------------------------------------------- */
  $('#backToTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    var logo = $('.nav-logo');
    if (logo) setTimeout(function () { logo.focus({ preventScroll: true }); }, 400);
  });

  /* ---------------------------------------------------------
     Misc
     --------------------------------------------------------- */
  var year = $('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
