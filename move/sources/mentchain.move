module mentchain_registry {
    use std::signer;

    struct UserRegistry has key {
        is_registered: bool,
    }

    public fun register_user(account: &signer) {
        let account_addr = signer::address_of(account);
        if (!exists<UserRegistry>(account_addr)) {
            move_to(account, UserRegistry { is_registered: true });
        }
    }

    public fun is_registered(account_addr: address): bool acquires UserRegistry {
        exists<UserRegistry>(account_addr)
    }
}