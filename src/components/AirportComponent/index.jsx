import React, { useState } from 'react';
import {
  Provider,
  defaultTheme,
  Button,
  Flex,
  Text,
  View,
  Heading,
  Form,
  TextField,
  Picker,
  Item,
  Dialog,
  DialogTrigger,
  Content,
  ButtonGroup,
  Image,
} from '@adobe/react-spectrum';

function AirportComponent() {
  const [terminals, setTerminals] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleAddTerminal = () => {
    setTerminals([...terminals, { title, description, image }]);
    setTitle('');
    setDescription('');
    setImage(null);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <Provider theme={defaultTheme}>
      <View padding="size-300">
        <Heading level={1}>Indira Gandhi International Airport</Heading>

        <Flex gap="size-300">
          <DialogTrigger>
            <Button variant="cta">Add Terminal</Button>
            {(close) => (
              <Dialog>
                <Heading>Add Terminal</Heading>
                <Content>
                  <Form>
                    <TextField
                      label="Terminal Title"
                      value={title}
                      onChange={setTitle}
                    />
                    <TextField
                      label="Description"
                      value={description}
                      onChange={setDescription}
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      style={{ marginTop: '16px' }}
                    />
                    {image && (
                      <img
                        src={image}
                        alt="Uploaded"
                        style={{ marginTop: '16px', maxWidth: '100%' }}
                      />
                    )}
                  </Form>
                </Content>
                <ButtonGroup>
                  <Button variant="secondary" onPress={close}>
                    Cancel
                  </Button>
                  <Button
                    variant="cta"
                    onPress={() => {
                      handleAddTerminal();
                      close();
                    }}
                  >
                    Continue
                  </Button>
                </ButtonGroup>
              </Dialog>
            )}
          </DialogTrigger>

          <Flex direction="row" gap="size-200">
            {terminals.map((terminal, index) => (
              <View key={index} borderColor="dark" borderWidth="thin" padding="size-200" margin="size-200" width="size-3600">
                {terminal.image && (
                  <Image
                    src={terminal.image}
                    alt={terminal.title}
                    objectFit="cover"
                    width="100%"
                    height="size-2000"
                  />
                )}
                <Heading level={3}>{terminal.title}</Heading>
                <Text>{terminal.description}</Text>
              </View>
            ))}
          </Flex>
        </Flex>

        <Form>
          <Heading level={2}>Services</Heading>

          <Text>Lost & Found</Text>
          <Flex direction="column" gap="size-200">
          
            <Picker label="Service Name">
              <Item key="lostFound">Lost & Found</Item>
              <Item key="lounge">Lounge</Item>
              <Item key="moneyExchange">Money Exchange</Item>
            </Picker>

            <Picker label="Category">
              <Item key="option1">Option 1</Item>
              <Item key="option2">Option 2</Item>
            </Picker>

            <Picker label="Sub Category">
              <Item key="option1">Option 1</Item>
              <Item key="option2">Option 2</Item>
            </Picker>

            <TextField label="Description" placeholder="Type here" />
            <div>
            <Button variant="primary" onPress={() => alert('Saved!')}>Save</Button>
            </div>
          </Flex>
        </Form>
      </View>
    </Provider>
  );
}

export default AirportComponent;
