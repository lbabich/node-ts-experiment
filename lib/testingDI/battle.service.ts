import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from "./interfaces/types";
import Fighter from './fighter';
import Warrior from './warrior';

const myContainer = new Container();

myContainer.bind<Fighter>(TYPES.Fighter).to(Fighter);
myContainer.bind<Warrior>(TYPES.Warrior).to(Warrior).inSingletonScope();

const warrior = myContainer.get<Warrior>(TYPES.Warrior);
const fighter = myContainer.get<Fighter>(TYPES.Fighter);

warrior.setWarriorType('Samurai');

fighter.greet();
