const Link = ({ href, children, className }) => {
  return (
    <>
      {href?.startsWith("http") ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {children}
        </a>
      ) : (
        <a href={href} className={className}>
          {children}
        </a>
      )}
    </>
  );
};

export default Link;
