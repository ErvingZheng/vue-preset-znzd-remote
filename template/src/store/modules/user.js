import { login } from "@/api/user";
import { setToken, removeToken, setRole, removeRole } from "@/utils/auth";

const user = {
  state: {
    userInfo: {}
  },

  mutations: {
    SET_USER_INFO: (state, info) => {
      state.userInfo = info;
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then(response => {
            const data = response.data;
            commit("SET_USER_INFO", data.userInfo);
            setToken(data.token);
            setRole(data.role);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 登出
    Logout({ commit }) {
      return new Promise(resolve => {
        commit("SET_USER_INFO", {});
        removeToken();
        removeRole();
        resolve();
      });
    }
  }
};

export default user;
