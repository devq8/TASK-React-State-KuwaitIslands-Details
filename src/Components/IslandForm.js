export default function IslandForm({ island }) {
  function bookingConfirmation() {
    let message = `Are you sure you want to book a trip to ${
      island.name
    } island with the name: ${
      document.getElementById("name").value
    } and phone number: ${document.getElementById("phone").value}`;
    if (window.confirm(message) == true) {
      alert("You have booked a trip to " + island.name + " island!");
      island.visitors += 1;
    } else {
      alert("You have cancelled your booking.");
    }
  }

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>

      <label for="name">Full Name</label>
      <input id="name" name="name" placeholder="Type Full Name" />
      <label for="phone">Phone Number</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{8}"
        placeholder="+965 12345678"
      />
      <button className="book" onClick={bookingConfirmation}>
        Book for today!
      </button>
    </div>
  );
}
