// 5 studio "scenes" — placeholders rendered by <StudioImage />.
// When you have real photos, swap each entry's `kind` for `image: '/path.jpg'`
// and let StudioImage render <img> instead.

export const scenes = [
  {
    id: 1,
    kind: 'control-room',
    title: 'La régie',
    caption: 'Console analogique · monitoring proche',
    layout: 'wide',  // tall / wide / square
  },
  {
    id: 2,
    kind: 'live-room',
    title: 'Live room',
    caption: 'Pièce traitée acoustiquement · 45 m²',
    layout: 'tall',
  },
  {
    id: 3,
    kind: 'synths',
    title: 'Synthés vintage',
    caption: 'Collection analogique · OB-6, Juno-60, Prophet-5',
    layout: 'square',
  },
  {
    id: 4,
    kind: 'vocal-booth',
    title: 'Cabine voix',
    caption: 'U87, C414 · isolation totale',
    layout: 'tall',
  },
  {
    id: 5,
    kind: 'tape',
    title: 'Bande analogique',
    caption: 'Studer A80 · 1/2 pouce, 30 ips',
    layout: 'wide',
  },
]
