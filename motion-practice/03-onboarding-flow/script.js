const steps = document.querySelectorAll('.step');
const dots = document.querySelectorAll('.dot');
const progressFill = document.getElementById('progressFill');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');

let currentStep = 1;
const totalSteps = steps.length;
let userName = '';
let userChoice = '';
let userTheme = '';

function goToStep(stepNumber) {
  steps.forEach(step => {
    const num = parseInt(step.dataset.step, 10);
    step.classList.toggle('active', num === stepNumber);
  });

  dots.forEach((dot, i) => dot.classList.toggle('active', i === stepNumber - 1));
  progressFill.style.width = `${(stepNumber / totalSteps) * 100}%`;
  backBtn.classList.toggle('hidden', stepNumber === 1);

  nextBtn.textContent = stepNumber === totalSteps ? 'Finish' : 'Continue';

  if (stepNumber === totalSteps) {
    document.getElementById('doneHeading').textContent = userName ? `You're all set, ${userName}!` : "You're all set!";
    document.getElementById('doneSummary').textContent =
      `Workspace: ${userChoice || 'Personal use'} · Theme: ${userTheme || 'Violet'}`;
  }

  currentStep = stepNumber;
}

nextBtn.addEventListener('click', () => {
  if (currentStep === 1) {
    userName = document.getElementById('nameInput').value.trim();
  }
  if (currentStep === totalSteps) {
    alert('Onboarding complete! (This is where you would redirect into the app.)');
    return;
  }
  goToStep(currentStep + 1);
});

backBtn.addEventListener('click', () => {
  if (currentStep > 1) goToStep(currentStep - 1);
});

// Option card selection (step 2)
document.querySelectorAll('.option-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    userChoice = card.dataset.choice;
  });
});

// Theme swatch selection (step 3)
document.querySelectorAll('.theme-swatch').forEach(swatch => {
  swatch.addEventListener('click', () => {
    document.querySelectorAll('.theme-swatch').forEach(s => s.classList.remove('selected'));
    swatch.classList.add('selected');
    userTheme = swatch.dataset.theme;
  });
});
