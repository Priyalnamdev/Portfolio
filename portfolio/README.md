# PRIYAL — Creative Engineering Studio
    npm install
    npm run dev
Copy `.env.example` to `.env`. Put your resume PDF in `public/` and set `VITE_RESUME_URL=/resume.pdf`.
EmailJS template variables: name, email, project_type, budget, timeline, message.
Without EmailJS, the form opens a mailto draft (needs VITE_CONTACT_EMAIL) and says it was NOT sent.
