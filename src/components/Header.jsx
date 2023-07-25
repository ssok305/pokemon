import pokemon from "../images/Pokemon-Logo.png";

export default function Header() {
  return (
    <div className="navbar navbar-dark bg-primary">
      <img src={pokemon} alt="pokemon logo" width="250px" />
    </div>
  );
}
