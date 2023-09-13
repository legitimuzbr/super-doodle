type Props = {
  name: string;
  lastname: string;
};

function Topo(props: Props) {
  return (
    <>
      <h1>
        Olá, {props.name} {props.lastname}, tudo bem?
      </h1>
    </>
  );
}

export default Topo;
