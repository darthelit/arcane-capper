import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, ScrollView, Text } from 'react-native';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { Card, Wrapper } from '../common';
import { getAllPokemon } from '../../api/PokeApi';
import util from '../../util';
import { pokemonListState } from '../../Recoil/Selectors';

const PokemonList = ({ navigation }) => {
  // const setPokemon = useSetRecoilState(pokemonState);
  // setPokemon(getAllPokemon.subscribe());
  const mons = useRecoilValue(pokemonListState);
  // useEffect(() => {
  //   if(util.isEmpty(pokemon)) {
  //     setPokemon(getAllPokemon());
  //   }
  // }, [pokemon])

  return (
    <ScrollView>
      <Wrapper style={{ marginTop: 40}}>
        <FlatList
          data={mons.data.results}
          renderItem={(mon) => <Card><Text>{JSON.stringify(mon)}</Text></Card>}
        />
      </Wrapper>
    </ScrollView>
  );
}

export default PokemonList;