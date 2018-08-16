import {Container} from 'inversify';
import {Fighter} from './fighter';
import {TYPES} from './interfaces/types';
import 'reflect-metadata';
import Warrior from './warrior';

const myContainer = new Container();

myContainer.bind<Fighter>(TYPES.Fighter).to(Fighter);
myContainer.bind<Warrior>(TYPES.Warrior).to(Warrior).inSingletonScope();

const warrior = myContainer.get<Warrior>(TYPES.Warrior);
const fighter = myContainer.get<Fighter>(TYPES.Fighter);

warrior.setWarriorType('Samurai');

fighter.greet();
