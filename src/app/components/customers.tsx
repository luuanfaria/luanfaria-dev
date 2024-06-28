import Image from 'next/image'

const customerList = [
  'blue-moon-logo.svg',
  'detail-logo.png',
  'dilson-logo.png',
  'douglas-logo.jpg',
  'dubles-logo.png',
  'patricia-logo.jpg',
]

export function Customers() {
  return (
    <div className="flex gap-6 mt-16">
      {customerList.map((customer, index) => (
        <Image
          className="object-contain"
          key={index}
          src={`/customers/${customer}`}
          alt=""
          width={112}
          height={40}
        />
      ))}
    </div>
  )
}
