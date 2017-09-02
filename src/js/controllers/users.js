angular
  .module('laundryApp')
  .controller('UsersIndexCtrl', UsersIndexCtrl)
  .controller('UsersShowCtrl', UsersShowCtrl)
  .controller('UsersEditCtrl', UsersEditCtrl);

UsersIndexCtrl.$inject = ['User', '$scope', 'filterFilter', '$auth'];
function UsersIndexCtrl(User, $scope, filterFilter, $auth) {
  const vm = this;

  vm.all = User.query();
  vm.currentUser = User.get({ id: $auth.getPayload().id });

}

UsersShowCtrl.$inject = ['User', '$auth', '$state'];
function UsersShowCtrl(User, $auth, $state) {
  const vm = this;
  vm.currentUser = [];

  vm.user = User.get({ id: $auth.getPayload().id });
  console.log(vm.user);

  function Delete() {
    vm.user
      .$remove()
      .then(() => {
        $auth.logout();
        $state.go('static');
      });
  }

  vm.delete = Delete;
}


UsersEditCtrl.$inject = ['User', '$auth', '$state'];
function UsersEditCtrl(User, $auth, $state) {
  const vm = this;

  vm.user = User.get({ id: $auth.getPayload().id });

  function usersUpdate() {
    vm.user
    .$update()
    .then(() => $state.go('usersShow'));
  }

  vm.update = usersUpdate;
}
