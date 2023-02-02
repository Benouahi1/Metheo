import { useDrawerStatus } from '@react-navigation/drawer';
let contador = 0;

export default function Update(set){
const isDrawerOpen = useDrawerStatus() === 'open';

 if(isDrawerOpen || contador %2 !=0 && !isDrawerOpen){
  contador++
  if(contador %2 ==0 && contador != 0){
    set(contador)
  }
 }
}