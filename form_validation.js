let data = {
      ...state.form_data,
      queue: state.form_data.queue.value,
      destination: state.form_data.destination.value,
      status: state.form_data.status.value === 'active' ? 1 : 0,
      gateway_type: state.form_data.gateway_type.value === 'phpmailer' ? 1 : 0,
      emailbox_type: state.form_data.emailbox_type.value,
      tls: state.form_data.tls.value,
      outgoing_secure: state.form_data.outgoing_secure.value
    };
    let validate = [
      'emailbox_name', 'username',
      'password', 'host', 'port', 'outgoing_host',
      'outgoing_port', 'outgoing_username',
      'outgoing_password', 'from_name', 'from_email'
    ];
    let validationObject = {};
    validate.filter((search) => {
      validationObject[search] = data[search]
    });
    for (const key in validationObject) {
      if (validationObject[key].trim() === '') {
        if (typeof key === 'string') {
          return setState({ ...state, error: key })
        }
      }
    }
else worksssssssssss
