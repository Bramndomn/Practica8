export const business = {
  name: 'Terraza Angelo',
  description:
    'Sombreado jardín amurallado con fuente donde se sirven desayunos tipo buffet al estilo mexicano, jugos y café.',
  address: {
    street: 'Calle Sta. Mónica 1010',
    neighborhood: 'La Normal',
    postalCode: '44200',
    city: 'Guadalajara, Jal.',
  },
  coordinates: { lat: 20.6919198, lng: -103.3497736 },
  mapsUrl:
    'https://www.google.com/maps/place/Terraza+Angelo/@20.6919943,-103.349831,20z/data=!4m6!3m5!1s0x8428b1dcfeba5fa9:0xadfd1c9b39cc966!8m2!3d20.6919198!4d-103.3497736!16s%2Fg%2F1tdy9cx1',
} as const

export const fullAddress = `${business.address.street}, ${business.address.neighborhood}, ${business.address.postalCode} ${business.address.city}`

export const mapsEmbedUrl = `https://www.google.com/maps?q=${business.coordinates.lat},${business.coordinates.lng}&z=17&output=embed`
