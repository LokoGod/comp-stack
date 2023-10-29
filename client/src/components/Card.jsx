const Card = () => {
  return (
    <div className="card w-96 bg-base-100 m-5 shadow">
      <figure className="px-10 pt-10">
        <img
          src="https://media.licdn.com/dms/image/D560BAQFJCyexxrdgVQ/company-logo_200_200/0/1692700549587?e=1706745600&v=beta&t=vW4FuJ3Cqj10rVbXnndyZVrmjNEhMATh3509GYxuk5Q"
          alt="Shoes"
          className="rounded-xl w-20"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Ascentic</h2>
        <p>
          Your Swe-Lankan Partner for High-Performing and Sustainable Software
          Development Teams
        </p>
        <div className="card-actions">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
