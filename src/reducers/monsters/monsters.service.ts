import { API_URL } from '../../constants/env';
import {
  Battle,
  Monster,
  Winner,
  WinnerInvalid,
} from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

const getWinner = async (battle: Battle): Promise<Winner | WinnerInvalid> =>
  await fetch(`${API_URL}/battle`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(battle),
  }).then((response) => response.json());

export const MonsterService = {
  getAll,
  getWinner,
};
