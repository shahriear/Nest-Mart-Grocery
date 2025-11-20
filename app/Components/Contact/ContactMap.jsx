export function ContactMap() {
  return (
    <div className="w-full h-[250px] rounded-xl overflow-hidden border">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.5844997036884!2d90.39731687605371!3d23.86888378421599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c59ad99e526d%3A0x8301be280dfeb039!2sCreative%20IT%20Institute%2C%20Uttara%20Campus!5e0!3m2!1sen!2sbd!4v1763608244858!5m2!1sen!2sbd"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
