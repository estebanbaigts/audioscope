// Fiche technique du studio — structuré depuis /public/fichetech.pdf
// Chaque catégorie regroupe des marques, chacune avec ses modèles.

export const gearCategories = [
  {
    id: 'micros',
    label: 'Microphones',
    short: 'Micros',
    accent: '#a87a4f',
    brands: [
      { name: 'Neumann', items: ['U87 vintage ×2', 'U87 AI', 'U47 FET', 'KM100 ×2', 'KM184'] },
      { name: 'Telefunken', items: ['U47'] },
      { name: 'AKG', items: ['C414 UBS', 'C414 XLS', 'C451E ×2'] },
      { name: 'Royer', items: ['R-221'] },
      { name: 'Beyer', items: ['M88 ×2', 'M-260'] },
      { name: 'Shure', items: ['SM7A', 'SM57 ×5', 'A330'] },
      { name: 'Sennheiser', items: ['MD421 ×4', 'MD421 White', 'MD441'] },
    ],
  },
  {
    id: 'preamps',
    label: 'Préamplis',
    short: 'Préamplis',
    accent: '#6b4226',
    brands: [
      { name: 'SSL', items: ['14E', '16G'] },
      { name: 'MCI', items: ['Side car MCI636 ×12'] },
      { name: 'Neve', items: ['1073 DPA dual', 'V51 ×2', 'BAE 1073 + EQ 500'] },
      { name: 'Altec', items: ['1519A'] },
      { name: 'Telefunken', items: ['V76', 'V72 ×2'] },
      { name: 'Chandler', items: ['Premiere TG Channel', 'TG2'] },
      { name: 'API', items: ['7600'] },
      { name: 'AEA', items: ['Preamp ribbon'] },
      { name: 'Ampex', items: ['600'] },
    ],
  },
  {
    id: 'outboard',
    label: 'Compresseurs & Outboard',
    short: 'Outboard',
    accent: '#3d2818',
    brands: [
      { name: 'Universal Audio', items: ['1176 Silver Face', '1176 Black Face', '1178'] },
      { name: 'Thermionic Culture', items: ['The Culture Vulture ×2'] },
      { name: 'Retro Instruments', items: ['The Phoenix Compressor', 'Doublewide'] },
      { name: 'Empirical Labs', items: ['Distressor EL8X'] },
      { name: 'Gates', items: ['Gates Compressor'] },
      { name: 'DBX', items: ['Gates', 'Comp', 'LA-4'] },
      { name: 'Roland', items: ['RE-301 Space Echo'] },
      { name: 'SPL', items: ['Transient Designer'] },
    ],
  },
  {
    id: 'backline',
    label: 'Backline & Amplis',
    short: 'Backline',
    accent: '#a87a4f',
    brands: [
      { name: 'Claviers', items: ['Yamaha U3', 'Rhodes 88 Mk1'] },
      { name: 'Guitares', items: ['Telecaster japonaise', 'Telecaster mexicaine', 'Telecaster deluxe'] },
      { name: 'Basses', items: ['Jazz Bass', 'Precision', 'Höfner Violin Bass'] },
      { name: 'Amplis', items: ['Fender Twin Reverb', 'Vox AC30', 'WEM', 'Marshall 5W'] },
    ],
  },
]

export const gearStats = [
  { n: '30+', label: 'Microphones' },
  { n: '20+', label: 'Préamplis' },
  { n: '15+', label: 'Compresseurs / outboard' },
  { n: '12', label: 'Instruments & amplis' },
]
