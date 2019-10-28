/* MODULES */
import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdAddCircleOutline } from 'react-icons/md';
import { errorMessage } from '~/utils/Message';
import schema from '~/validations/Meetapp';

/* SERVICES */
import api from '~/services/api';
import history from '~/services/history';

/* COMPONENTS */
import { Container } from '~/styles/FormMeetapp';
import Banner from '~/components/Banner';
import SelectDate from '~/components/DatePicker';

export default function NewMeetapp() {
  /* STATES */
  const [date, setDate] = useState();

  /* FUNCTIONS */
  async function handleSubmit(data) {
    try {
      const response = await api.post('meetapps', data);
      if (response.status !== 201)
        toast.error(`Houve um erro - tente novamente [${response.body.error}]`);
      history.push('/');
      toast.success('Meetup criado com sucesso');
    } catch (e) {
      errorMessage(e);
    }
  }
  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Banner name="banner_id" />
        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
        <SelectDate selected={date} setSelected={setDate} name="date" />
        <Input name="location" placeholder="Localização" />

        <button type="submit">
          <MdAddCircleOutline size={20} color="#fff" />
          Salvar meetup
        </button>
        <Link to="/">Voltar</Link>
      </Form>
    </Container>
  );
}
