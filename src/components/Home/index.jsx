import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import {
  Checkbox,
  Flex,
  View,
  Heading,
  TableView,
  TableHeader,
  Column,
  TableBody,
  Row,
  Cell,
  Button,
  Dialog,
  DialogTrigger,
  Content,
  Heading as DialogHeading,
  TextField,
  Form,
  ActionButton,
  ButtonGroup
} from "@adobe/react-spectrum";
import "./style.css";

const initialAirports = [
  {
    id: uuidv4(),
    name: "Indira Gandhi International Airport",
    country: "India",
    code: "DEL",
    terminals: 3,
  },
  {
    id: uuidv4(),
    name: "Dubai International Airport",
    country: "UAE",
    code: "DXB",
    terminals: 5,
  },
  { id: uuidv4(), name: "Heathrow Airport", country: "England", code: "LHR", terminals: 6 },
  { id: uuidv4(), name: "Istanbul Airport", country: "Turkey", code: "IST", terminals: 3 },
  {
    id: uuidv4(),
    name: "Rajiv Gandhi International Airport",
    country: "India",
    code: "HYD",
    terminals: 2,
  },
];

const Home = () => {
  const [selectedAirports, setSelectedAirports] = useState(new Set());
  const [airports, setAirports] = useState(initialAirports);
  const [editingAirport, setEditingAirport] = useState(null);
  const [deletingAirport, setDeletingAirport] = useState(null);

  const handleCheckboxChange = (airportCode) => {
    setSelectedAirports((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(airportCode)) {
        newSelected.delete(airportCode);
      } else {
        newSelected.add(airportCode);
      }
      return newSelected;
    });
  };

  const handleAddNewAirport = (data) => {
    const newAirport = {
      id: uuidv4(),
      name: data.name,
      country: data.country,
      code: data.code,
      terminals: data.terminals
    };
    setAirports([...airports, newAirport]);
  };

  const handleDeleteAirport = (id) => {
    setAirports(airports.filter((airport) => airport.id !== id));
  };

  const handleEditAirport = (id, data) => {
    setAirports(
      airports.map((airport) =>
        airport.id === id ? { ...airport, ...data } : airport
      )
    );
    setEditingAirport(null);
  };


  return (
    <View UNSAFE_className="table" padding="size-200">
      <Flex justifyContent="space-between" alignItems="center">
        <Heading level={2}>Airports</Heading>
        <DialogTrigger>
          <Button variant="cta">+ Add New</Button>
          {(close) => (
            <Dialog>
              <DialogHeading>Add New Airport</DialogHeading>
              <Content>
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const data = {
                      name: formData.get("name"),
                      country: formData.get("country"),
                      code: formData.get("code"),
                      terminals: parseInt(formData.get("terminals"), 10)
                    };
                    handleAddNewAirport(data);
                    close();
                  }}
                >
                  <TextField label="Name" name="name" isRequired />
                  <TextField label="Country" name="country" isRequired />
                  <TextField label="Code" name="code" isRequired />
                  <TextField label="Terminals" name="terminals" type="number" isRequired />
                  <ButtonGroup>
                    <Button type="submit" variant="cta">Add</Button>
                    <Button variant="secondary" onPress={close}>Cancel</Button>
                  </ButtonGroup>
                </Form>
              </Content>
            </Dialog>
          )}
        </DialogTrigger>
      </Flex>
      <TableView aria-label="Airports Table">
        <TableHeader>
          <Column>All Airports</Column>
          <Column>Country</Column>
          <Column>Code</Column>
          <Column>Terminals</Column>
          <Column>Actions</Column>
        </TableHeader>
        <TableBody>
          {airports.map((airport) => (
            <Row key={airport.id}>
              <Cell>
                <Checkbox
                  isSelected={selectedAirports.has(airport.code)}
                  onChange={() => handleCheckboxChange(airport.code)}
                >
                  {airport.name}
                </Checkbox>
              </Cell>
              <Cell>{airport.country}</Cell>
              <Cell>{airport.code}</Cell>
              <Cell>{airport.terminals}</Cell>
              <Cell>
                <Flex gap="size-100">
                  <DialogTrigger isOpen={editingAirport === airport.id} onDismiss={() => setEditingAirport(null)}>
                    <ActionButton onPress={() => setEditingAirport(airport.id)}>
                      <i className="fa-solid fa-pencil"></i>
                    </ActionButton>
                    <Dialog>
                      <DialogHeading>Edit Airport</DialogHeading>
                      <Content>
                        <Form
                          onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target);
                            const data = {
                              name: formData.get("name"),
                              country: formData.get("country"),
                              code: formData.get("code"),
                              terminals: parseInt(formData.get("terminals"), 10)
                            };
                            handleEditAirport(airport.id, data);
                            setEditingAirport(null);
                          }}
                        >
                          <TextField label="Name" name="name" isRequired defaultValue={airport.name} />
                          <TextField label="Country" name="country" isRequired defaultValue={airport.country} />
                          <TextField label="Code" name="code" isRequired defaultValue={airport.code} />
                          <TextField label="Terminals" name="terminals" type="number" isRequired defaultValue={airport.terminals} />
                          <ButtonGroup>
                            <Button type="submit" variant="cta">Save</Button>
                            <Button variant="secondary" onPress={() => setEditingAirport(null)}>Cancel</Button>
                          </ButtonGroup>
                        </Form>
                      </Content>
                    </Dialog>
                  </DialogTrigger>
                  <DialogTrigger isOpen={deletingAirport === airport.id} onDismiss={() => setDeletingAirport(null)}>
                    <ActionButton onPress={() => setDeletingAirport(airport.id)}>
                      <i className="fa-solid fa-trash"></i>
                    </ActionButton>
                    <Dialog>
                      <DialogHeading>Confirm Deletion</DialogHeading>
                      <Content>
                        <ButtonGroup>
                          <Button
                            variant="negative"
                            onPress={() => {
                              handleDeleteAirport(airport.id);
                              setDeletingAirport(null);
                            }}
                          >
                            Delete
                          </Button>
                          <Button variant="secondary" onPress={() => setDeletingAirport(null)}>
                            Cancel
                          </Button>
                        </ButtonGroup>
                      </Content>
                    </Dialog>
                  </DialogTrigger>
                </Flex>
              </Cell>
            </Row>
          ))}
        </TableBody>
      </TableView>
    </View>
  );
};

export default Home;
