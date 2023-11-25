import { Request, Response } from 'express';

import { createUser } from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'paulo@paulo',
    password: '123',
    techs: ['Java', 'JS', { title: 'JavaScript', experience: 100 }],
  });

  return response.json({ message: 'Hello World' });
}
