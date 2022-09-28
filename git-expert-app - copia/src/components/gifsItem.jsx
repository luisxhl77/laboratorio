
export const GifsItem = ({title, url}) => {
  return (
    <div className="card">
        <h4>{title}</h4>
        <img src={url} alt="" />
    </div>
  )
}
