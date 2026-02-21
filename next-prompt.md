# Next Prompt: Contact & Location Page

## Context
We are expanding the website for **MIR Gráfica**. We currently have a highly polished, responsive Single Page Landing Page that highlights their large-format printing services, B2B offerings, and portfolio. We now need a dedicated, extremely premium **Contact and Advanced Location Page**. 

## Objective
Generate a beautiful, modern, and high-conversion "Contact Us" page (`ContactPage.tsx`) as a React component using Tailwind CSS and shadcn/ui principles. The component must match our existing design system perfectly.

## Requirements
1.  **Form Section**:
    *   A massive, bold headline (e.g., "Fale com os \n [outline]Especialistas[/outline]").
    *   A highly polished contact form:
        *   Fields: Nome Completo, Nome da Empresa (Opcional), Email, Contacto Telefónico, Tipo de Serviço (Dropdown: Branding, Corte Laser, DTF, etc), Mensagem.
        *   Inputs should have a transparent/glassmorphism feel or soft `bg-slate-50` with `border-slate-200`, focusing on the placeholder text. 
        *   Focus states must use our `ring-primary`.
    *   A massive Primary CTA button to submit.

2.  **Contact Information & Location Sidebar**:
    *   Display direct contact info: Telefone principal, Email de orçamentos, e WhatsApp.
    *   Use `Material Symbols Outlined` for icons (phone, mail, pin_drop).
    *   Interactive-looking map placeholder card (use `aspect-square` or `aspect-video` container with rounded corners and an abstract map image or dark placeholder).
    *   Address: "Meia Via, Nampula, Moçambique".
    *   Business Hours block.

3.  **FAQ Section (Bottom)**:
    *   An accordion (like shadcn/accordion) with 3-4 common questions related to large format printing (e.g., "Qual o prazo médio de entrega?", "Vocês fazem envio para fora de Nampula?").

## Guidelines
- Follow exactly the guidelines defined in `./DESIGN.md`.
- Use `Space Grotesk` font family constraints (`font-display`).
- The general layout must use `max-w-7xl mx-auto px-6` with `py-24`.
- Incorporate our primary cyan (`#00a3e0` -> `bg-primary`, `text-primary`).
- Ensure it works natively with `className` and handles toggleable Dark Mode (via Tailwind's `.dark` class).

## Data Independence
- Extract ALL static text, labels, and placeholder images into a `const localMockData = {}` object at the top of the file so we can easily move it to `src/data/mockData.ts` later.

## Output
Please output the raw TSX code for the `ContactPage` component.
