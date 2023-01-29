import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import HospitalHistory from "../components/history/hospitalHistory";


beforeEach(() => {
   render(<HospitalHistory />)
})


it('should the hospital rendered', function () {
   expect(screen.getAllByLabelText('Logs')).toBeInTheDocument();
});
// test('Hospital History Component should be rendered', () => {
//    const { container } = render(<HospitalHistory />);
//    expect(container).toBeInTheDocument();
//    expect(container).toHaveTextContent('Logs');
// });