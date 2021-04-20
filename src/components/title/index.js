export default function Title({ title, tag }) {
  if (tag === 'h1')
    return <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>;
  else if (tag === 'h2')
    return <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>;
  else if (tag === 'h3')
    return <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>;
  else if (tag === 'h4')
    return <h4 dangerouslySetInnerHTML={{ __html: title }}></h4>;
  else if (tag === 'h5')
    return <h5 dangerouslySetInnerHTML={{ __html: title }}></h5>;
}
