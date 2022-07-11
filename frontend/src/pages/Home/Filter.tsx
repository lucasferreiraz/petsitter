import { Flex, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Text } from "@chakra-ui/react";
import { useState } from "react";

interface RangeFilterProps {
  name: string;
  min: number;
  max: number;
  step: number;
  selected: number[];
  type?: string;
  onChange: (newValue: number[]) => void;
}

function RangeFilter({ name, min, max, step, selected, type, onChange }: RangeFilterProps) {
  let valueMinFormated = undefined;
  let valueMaxFormated = undefined;
  if (type === 'price') {
    valueMinFormated = selected[0].toLocaleString('pt-bt', {style: 'currency', currency: 'BRL'});
    valueMaxFormated = selected[1].toLocaleString('pt-bt', {style: 'currency', currency: 'BRL'});
  }
  if (type === 'distance') {
    valueMinFormated = `${selected[0]} km`;
    valueMaxFormated = `${selected[1]} km`;
  }

  return (
    <>
      <Text fontWeight="bold">{name}</Text>
      <Flex
        justify="space-between"
        mt="3"
        mb="0"
      >
        <Text>{valueMinFormated === undefined ? selected[0] : valueMinFormated}</Text>
        <Text>{valueMaxFormated === undefined ? selected[1] : valueMaxFormated}</Text>
      </Flex>
      <RangeSlider
        min={min}
        max={max}
        step={step}
        defaultValue={[min, max]}
        onChange={onChange}
        mb="5"
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack bg="orange.main" />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={5} border="4px solid black" index={0} />
        <RangeSliderThumb boxSize={5} index={1} />
      </RangeSlider>
    </>
  );
}

export function Filter() {
  const [distanceSelected, setDistanceSelected] = useState([0, 50]);
  const [ratingSelected, setRatingSelected] = useState([0, 50]);
  const [priceSelected, setPriceSelected] = useState([0, 50]);

  return (
    <>
      <RangeFilter
        name="Distância"
        min={0}
        max={50}
        step={5}
        selected={distanceSelected}
        type='distance'
        onChange={(newValue) => setDistanceSelected(newValue)}
      />
      <RangeFilter
        name="Avaliação"
        min={1}
        max={5}
        step={1}
        selected={ratingSelected}
        onChange={(newValue) => setRatingSelected(newValue)}
      />
      <RangeFilter
        name="Preço"
        min={0}
        max={1000}
        step={10}
        type='price'
        selected={priceSelected}
        onChange={(newValue) => setPriceSelected(newValue)}
      />
    </>
  );
}