import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import swal from 'sweetalert2';

declare var $: any;

@Component({
	selector: 'calendar-cmp',
	templateUrl: 'calendar.component.html'
})

export class CalendarComponent implements OnInit {
	@ViewChild('fullcalendar') fullcalendar: FullCalendarComponent;
	events;
	calendarOptions: CalendarOptions;
	ngOnInit(): void {
		const today = new Date();
		const y = today.getFullYear();
		const m = today.getMonth();
		const d = today.getDate();
		this.events = [
			{
				title: 'All Day Event',
				start: new Date(y, m, 1),
				className: 'event-default'
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: new Date(y, m, d + 3, 6, 0),
				allDay: false,
				className: 'event-rose'
			},
			{
				title: 'Meeting',
				start: new Date(y, m, d - 1, 10, 30),
				allDay: false,
				className: 'event-green'
			},
			{
				title: 'Lunch',
				start: new Date(y, m, d + 7, 12, 0),
				end: new Date(y, m, d + 7, 14, 0),
				allDay: false,
				className: 'event-red'
			},
			{
				title: 'Md-pro Launch',
				start: new Date(y, m, d - 2, 12, 0),
				allDay: true,
				className: 'event-azure'
			},
			{
				title: 'Birthday Party',
				start: new Date(y, m, d + 1, 19, 0),
				end: new Date(y, m, d + 1, 22, 30),
				allDay: false,
				className: 'event-azure'
			},
			{
				title: 'Click for Creative Tim',
				start: new Date(y, m, 21),
				end: new Date(y, m, 22),
				url: 'https://www.creative-tim.com/',
				className: 'event-orange'
			},
			{
				title: 'Click for Google',
				start: new Date(y, m, 21),
				end: new Date(y, m, 22),
				url: 'https://www.creative-tim.com/',
				className: 'event-orange'
			}
		];
		this.calendarOptions = {
			headerToolbar: {
				right: 'prev,next today',
				center: 'dayGridMonth,timeGridWeek,timeGridDay',
				left: 'title'
			},
			initialView: 'dayGridMonth',
			initialEvents: this.events, // alternatively, use the `events` setting to fetch from a feed
			weekends: true,
			editable: true,
			selectable: true,
			selectMirror: true,
			dayMaxEvents: true,
			droppable: true,
			displayEventTime: true,
			views: {
				month: {
					titleFormat: { month: "long", year: "numeric" }
				},
				agendaWeek: {
					titleFormat: { month: "long", year: "numeric", day: "numeric" }
				},
				agendaDay: {
					titleFormat: { month: "short", year: "numeric", day: "numeric" }
				}
			},
			dateClick: this.addEvent.bind(this),

		};
	}
	handleDateClick() {
		console.log("test");
	}
	addEvent(event) {
		swal.fire({
			title: 'Create an Event',

			customClass: {
				confirmButton: "btn btn-fill btn-primary",
				cancelButton: "btn btn-default",
				input: "swl-input"
			},
			showCancelButton: true,
			confirmButtonText: "Save",
			input: "text",
			inputPlaceholder: "Event Title"

		}).then((result) => {
			this.fullcalendar.getApi().addEvent({
				title: result.value,
				start: event.date,
				className: 'event-default'
			});
		})
		console.log(event, "eve")
	}
}	