/**
 * GTF Overseas Payment Homepage Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initPaymentTabs();
  initCalculator();
  initConsultationForm();
  initFAQ();
  initBackToTop();
});

/* 1. Mobile Menu */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('mobile-menu-close');
  const links = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

  if (!menuBtn || !mobileMenu) return;

  function toggleMenu() {
    mobileMenu.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
  }

  menuBtn.addEventListener('click', toggleMenu);
  if (closeBtn) closeBtn.addEventListener('click', toggleMenu);

  links.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  });
}

/* 2. Payment Methods Tab Filtering */
function initPaymentTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const paymentCards = document.querySelectorAll('.payment-card');

  if (!tabBtns.length || !paymentCards.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetRegion = btn.getAttribute('data-region');

      tabBtns.forEach(b => b.classList.remove('active', 'bg-orange-600', 'text-white'));
      tabBtns.forEach(b => b.classList.add('bg-white', 'text-slate-700'));

      btn.classList.add('active', 'bg-orange-600', 'text-white');
      btn.classList.remove('bg-white', 'text-slate-700');

      paymentCards.forEach(card => {
        const cardRegion = card.getAttribute('data-region');
        if (targetRegion === 'all' || cardRegion === targetRegion) {
          card.classList.remove('hidden');
          card.classList.add('flex');
        } else {
          card.classList.add('hidden');
          card.classList.remove('flex');
        }
      });
    });
  });
}

/* 3. Fee & Savings Calculator */
function initCalculator() {
  const amountSlider = document.getElementById('calc-amount-slider');
  const amountDisplay = document.getElementById('calc-amount-display');
  const gtfFeeDisplay = document.getElementById('calc-gtf-fee');
  const compFeeDisplay = document.getElementById('calc-comp-fee');
  const monthlySavingsDisplay = document.getElementById('calc-monthly-savings');
  const annualSavingsDisplay = document.getElementById('calc-annual-savings');

  if (!amountSlider) return;

  // Assume standard general PG overseas fee: 3.8%
  // GTF Lowest Rate: 2.2% (approx 1.6% savings per transaction + free hardware + free marketing)
  const COMP_RATE = 0.038;
  const GTF_RATE = 0.022;

  function updateCalculation() {
    const amountInTenThousand = parseInt(amountSlider.value, 10); // in 만원 (10,000 KRW)
    const amount = amountInTenThousand * 10000;

    // Formatting
    const formattedAmount = (amountInTenThousand >= 10000) 
      ? `${(amountInTenThousand / 10000).toFixed(1)}억 원` 
      : `${amountInTenThousand.toLocaleString()}만 원`;

    amountDisplay.textContent = formattedAmount;

    const compFee = Math.round(amount * COMP_RATE);
    const gtfFee = Math.round(amount * GTF_RATE);
    const monthlySavings = compFee - gtfFee;
    const annualSavings = monthlySavings * 12;

    if (gtfFeeDisplay) gtfFeeDisplay.textContent = `${gtfFee.toLocaleString()}원`;
    if (compFeeDisplay) compFeeDisplay.textContent = `${compFee.toLocaleString()}원`;
    if (monthlySavingsDisplay) monthlySavingsDisplay.textContent = `${monthlySavings.toLocaleString()}원`;
    if (annualSavingsDisplay) annualSavingsDisplay.textContent = `${(annualSavings / 10000).toLocaleString(undefined, {maximumFractionDigits: 1})}만 원`;
  }

  amountSlider.addEventListener('input', updateCalculation);
  updateCalculation();
}

/* 4. Consultation Form Validation & Feedback */
function initConsultationForm() {
  const form = document.getElementById('consult-form');
  const successModal = document.getElementById('consult-success-modal');
  const successClose = document.getElementById('consult-success-close');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const clinicName = form.elements['clinic_name']?.value.trim();
    const contactName = form.elements['contact_name']?.value.trim();
    const phone = form.elements['phone']?.value.trim();
    const specialty = form.elements['specialty']?.value;
    const message = form.elements['message']?.value.trim();

    if (!clinicName || !contactName || !phone) {
      alert('병의원명, 담당자명, 연락처는 필수 입력 항목입니다.');
      return;
    }

    const inquiryData = {
      clinicName,
      contactName,
      phone,
      specialty,
      message,
      createdAt: new Date().toISOString()
    };

    // Save to localStorage
    const inquiries = JSON.parse(localStorage.getItem('gtf_inquiries') || '[]');
    inquiries.push(inquiryData);
    localStorage.setItem('gtf_inquiries', JSON.stringify(inquiries));

    form.reset();

    if (successModal) {
      successModal.classList.remove('hidden');
      successModal.classList.add('flex');
    } else {
      alert('상담 신청이 성공적으로 접수되었습니다. GTF 전문 담당자가 24시간 내 연락드립니다.');
    }
  });

  if (successClose && successModal) {
    successClose.addEventListener('click', () => {
      successModal.classList.add('hidden');
      successModal.classList.remove('flex');
    });
  }
}

/* 6. FAQ Accordion */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-trigger');

  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const content = item.nextElementSibling;
      const icon = item.querySelector('.faq-icon');
      const isOpen = !content.classList.contains('hidden');

      // Close all
      document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotate-180'));

      if (!isOpen) {
        content.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });
}

/* 7. Back to Top */
function initBackToTop() {
  const bttBtn = document.getElementById('back-to-top');
  if (!bttBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      bttBtn.classList.remove('opacity-0', 'pointer-events-none');
      bttBtn.classList.add('opacity-100');
    } else {
      bttBtn.classList.add('opacity-0', 'pointer-events-none');
      bttBtn.classList.remove('opacity-100');
    }
  });

  bttBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
