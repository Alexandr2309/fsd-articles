import { StateSchema } from 'app/providers/storeProvider';
import { getProfileIsLoading } from 'entities/Profile';

describe('getProfileIsLoading', () => {
  test('success', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });
});
