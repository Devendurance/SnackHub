function BannerName({ name, discount, more }) {
  // const currency = &#8358;
  return (
    <div className="bannerContent">
      <h3>Hello {name},</h3>
      <p>
        Get free discount for every <span>&#8358; {`${discount}`}</span>{" "}
        purchase you make on snackhub
      </p>
      <a href={more}>Learn More</a>
    </div>
  );
}

export default BannerName;