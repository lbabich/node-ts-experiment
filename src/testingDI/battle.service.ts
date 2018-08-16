import 'reflect-metadata';
import {TYPES} from './types';
import {Container} from 'inversify';

import {Warrior} from './warrior';
import {Fighter} from './fighter';

import {IFighter} from './interfaces/fighter.interface';
import {IWarrior} from './interfaces/warrior.interface';

const container = new Container();

container.bind<IFighter>(TYPES.Fighter).to(Fighter);
container.bind<IWarrior>(TYPES.Warrior).to(Warrior).inSingletonScope();

const fighter = container.get<IFighter>(TYPES.Fighter);
const warrior = container.get<IWarrior>(TYPES.Warrior);

warrior.setWarriorType('Samurai');

const message = fighter.greet();

console.info(message);
