angular
  .module('laundryApp')
  .factory('Cleaner', Cleaner);

Cleaner.$inject = ['$resource', 'API_URL'];
function Cleaner($resource, API_URL) {
  return new $resource(`${API_URL}/posts/:id`, { id: '@id' }, { update: {method: 'PUT' }
  });
}
