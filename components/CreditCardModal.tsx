import React from "react";
import {
  Modal,
  Button,
  TextInput,
  Group,
  Grid,
  Space,
  NumberInput,
} from "@mantine/core";

interface CreditCardModalProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreditCardModal: React.FC<CreditCardModalProps> = ({
  opened,
  setOpened,
}) => {
  const [cardNumber, setCardNumber] = React.useState<string>("");
  const [expiryDate, setExpiryDate] = React.useState<string>("");
  const [cvc, setCvc] = React.useState<number | undefined>(undefined);
  const [nameOnCard, setNameOnCard] = React.useState<string>("");

  const handlePayment = () => {
    // Handle payment logic here
    console.log("Card Info:", { cardNumber, expiryDate, cvc, nameOnCard });
    setOpened(false); // Close modal after payment
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Enter your credit card information"
      >
        <TextInput
          label="Card Number"
          placeholder="1234 5678 9012 3456"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.currentTarget.value)}
        />
        <Space h="md" />

        <Grid>
          <Grid.Col span={6}>
            <TextInput
              label="Expiry Date"
              placeholder="MM/YY"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.currentTarget.value)}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <NumberInput
              label="CVC"
              placeholder="123"
              value={cvc}
              onChange={(value) => setCvc(value || undefined)} // Handle undefined for optional values
            />
          </Grid.Col>
        </Grid>

        <Space h="md" />

        <TextInput
          label="Name on Card"
          placeholder="John Doe"
          value={nameOnCard}
          onChange={(e) => setNameOnCard(e.currentTarget.value)}
        />

        <Space h="md" />

        <Group position="right">
          <Button onClick={handlePayment}>Submit Payment</Button>
        </Group>
      </Modal>
    </>
  );
};

export default CreditCardModal;
