export const scrollToAnchor = (id: string) => {
const el = document.getElementById(id);
if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};