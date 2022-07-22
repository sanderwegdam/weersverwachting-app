import "./WeatherMap.css";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function WeatherMap({ search }) {
  return (
    <section>
      <div className="weather-container-map">
        <div className="weather-map-drop paragraph">
          <div className="container-bot">
            <FaMapMarkerAlt className="weather-icon-location" />
            <p className="paragraph">
              {search.label}
            </p>
          </div>
        </div>
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${search?.long}5!3d${search?.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
          width="250"
          height="225"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
