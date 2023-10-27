import getRawBody from 'raw-body';

export async function getServerSideProps({ req }) {
  if (req.method == 'POST') {
    const body = await getRawBody(req);
    console.log(body.toString('utf-8'));
  }

  return { props: {} };
}

export default function Home() {
  return <div>nextjs</div>;
}
