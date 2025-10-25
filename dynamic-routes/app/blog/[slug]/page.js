

export default function Page({ params }) {
  // Destructure the slug directly from the 'params' prop
  const { slug } = params 

  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
      {/* You can now use the slug to fetch data */}
    </div>
  )
}