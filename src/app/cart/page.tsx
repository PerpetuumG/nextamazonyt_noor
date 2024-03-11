import Container from '@/components/Container';
import Title from '@/components/Title';
import Cart from "@/components/Cart";

const Page = () => {
  return (
    <Container>
      <Title title={'Your Cart'} />
        <Cart/>
    </Container>
  );
};

export default Page;
