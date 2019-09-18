import {MessageService} from './message.service';

describe('Message Service', () => {
  let messageService: MessageService;

  // TODO: could add set of tests for initial state

  describe('add', () => {
    it('should add message', () => {
      messageService = new MessageService();
      messageService.add('message');
      expect(messageService.messages).toEqual(['message']);
    });
    it('should add message in order', () => {
      messageService = new MessageService();
      messageService.add('message');
      messageService.add('message 2');
      expect(messageService.messages).toEqual(['message', 'message 2']);
    });
  });

  describe('clear', () => {
    // TODO: could add before each block to instantiate the service
    it('should clear', () => {
      messageService = new MessageService();
      messageService.add('message');
      messageService.clear();
      expect(messageService.messages.length).toBe(0);
    });

  });
});
