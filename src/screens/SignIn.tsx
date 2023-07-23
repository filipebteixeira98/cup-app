import { Center, Icon, Text } from 'native-base';
import { Fontisto } from '@expo/vector-icons';

import { Button } from '../components/Button';

import Logo from '../assets/logo.svg';

export function SignIn() {
  return (
    <Center flex={1} bgColor="gray.900" p={7}>
      <Logo width={212} height={40} />
      <Button
        type="SECONDARY"
        title="Sign In with Google"
        leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
        mt={12}
      />
      <Text color="white" textAlign="center" mt={4}>
        We do not use any information other than {'\n'}
        your e-mail to create your account.
      </Text>
    </Center>
  );
}
